import axios from 'axios';
import { isLocalhost, vtexSeachProductByCategoryEndpoint } from '../utils';
import { productShelf } from './shelf';


class BuyByCategory {
    constructor(){
        if(!$('.js-department-ids')) throw "N"
        const self = this;
        
        $(window).on('categoryTreeUpdated', function(){
            loader.render('.js-buy-by-category');
            self.init();
        })

        $(window).on('cardCategoryFinished', function(){
            $('.js-buy-by-category .loading').remove();
            $('.category__card .menu-list').each(function(){
                if($('li', this).length > 5){
                    $(this).slick({
                        vertical: true,
                        slidesToShow: 5
                    })
                }
            })
        })

        $(window).on('productFinished', function(){
            $('.buy-by-category .shelf ul').each(function(){
                if($('li', this).length > 5 && !$(this).hasClass('slick-initialized')){
                    $(this).slick({
                        arrows: true,
                        slideToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        variableWidth: true,
                    });
                }
            })
        })
        
    }


    init(){
        const self = this;
        const departmentIds = $('.js-department-ids').html().split(',');
        const categories = departmentIds.map(id => self.getCategory(id))
        categories.map(category => self.displayCardCategory(...category))
        $(window).trigger('cardCategoryFinished');
    }

    

    getCategory(categoryId){
        const categories = menu.categoryTree.filter(category => category.id == parseInt(categoryId))
        return categories;
    }

    displayCardCategory(category){
        const self = this;
        const html = `
        <div class="buy-by-category">
            <div class="category category__card" data-category-id="${category.id}">
                <div class="category__card-header">
                <div class="category__card-media"><img src="http://via.placeholder.com/275x275"></div>
                <div class="category__card-info"><span class="category__name">${category.name}</span><a class="category__link" href="${category.url}">Ver todos</a></div>
                </div>
                ${category.children.length > 0 ? self.displayMenu(category.children): ''}

            </div>
            
        </div>`
      $('.js-buy-by-category').append(html);
        self.displayProducts(category.id)
    }

    displayMenu(children){
		const html = `
        <div class="category__menu">
            <ul class="menu-list">
                ${ children.map(category => {
                        return `<li><a href="${category.url}">
                        ${category.name}
                        </a></li>`;
                    }).join('')
                }
            </ul>
		</div>`

		return html;
    }
    

    displayProducts(categoryId){
        const products = this.getProducts(categoryId, this.renderProducts);
    }

    getProducts(categoryId, callback) {
        let self = this;
        const endpoint = isLocalhost ? `/json/productByCategory.json` : vtexSeachProductByCategoryEndpoint(categoryId);
        fetch(endpoint)
            .then(data => data.json())
            .then(products => callback(products, categoryId)) 
            .catch(error => console.log(error))
    }

    renderProducts(products, cardId){
        let shelf = products.map(product => productShelf(product, true)).join('');
        shelf = `<div class="shelf shelf__carousel--category">
            <ul>${shelf}</ul>
        </div>`;
        $(shelf).insertAfter(`.category__card[data-category-id="${cardId}"]`);
        $(window).trigger('productFinished');
        
    }

}

$(document).ready(function(){
	window.buyCategory = new BuyByCategory();	
})