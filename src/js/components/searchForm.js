import axios from 'axios';

export default class SearchForm {
    constructor(){
        

        const resultTeste = {
            "itemsReturned": [
                {
                    "items": [],
                    "thumb": "",
                    "thumbUrl": null,
                    "name": "bomba em Bombas",
                    "href": "https://casaegaragem.vtexcommercestable.com.br/bombas/bomba",
                    "criteria": "£bomba em Bombas¢/bombas/bomba"
                },
                {
                    "items": [
                        {
                            "itemId": "25",
                            "name": "Bomba Pressurizadora BFL120 Intech Machine - 110v",
                            "nameComplete": "Bomba Pressurizadora BFL120 Intech Machine - 110v",
                            "imageUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155455-25-25/5da4f7c27dd7f558a989edcc97245770.jpg?v=636688096382430000"
                        },
                        {
                            "itemId": "26",
                            "name": "Bomba Pressurizadora BFL120 Intech Machine - 220v",
                            "nameComplete": "Bomba Pressurizadora BFL120 Intech Machine - 220v",
                            "imageUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155458-25-25/5da4f7c27dd7f558a989edcc97245770.jpg?v=636688096450570000"
                        }
                    ],
                    "thumb": "<img src=\"https://casaegaragem.vteximg.com.br/arquivos/ids/155455-25-25/5da4f7c27dd7f558a989edcc97245770.jpg?v=636688096382430000\" width=\"25\" height=\"25\" alt=\"5da4f7c27dd7f558a989edcc97245770\" id=\"\" />",
                    "thumbUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155455-25-25/5da4f7c27dd7f558a989edcc97245770.jpg?v=636688096382430000",
                    "name": "bomba pressurizadora bfl120 intech machine",
                    "href": "https://casaegaragem.vtexcommercestable.com.br/bomba-pressurizadora-bfl120-intech-machine/p",
                    "criteria": null
                },
                {
                    "items": [
                        {
                            "itemId": "23",
                            "name": "Bomba Periférica BP500 Intech Machine - 110v",
                            "nameComplete": "Bomba Periférica BP500 Intech Machine - 110v",
                            "imageUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155453-25-25/f4977dfb7c83397233803a73cae17ecd.jpg?v=636688095792900000"
                        },
                        {
                            "itemId": "24",
                            "name": "Bomba Periférica BP500 Intech Machine - 220v",
                            "nameComplete": "Bomba Periférica BP500 Intech Machine - 220v",
                            "imageUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155454-25-25/f4977dfb7c83397233803a73cae17ecd.jpg?v=636688095925230000"
                        }
                    ],
                    "thumb": "<img src=\"https://casaegaragem.vteximg.com.br/arquivos/ids/155453-25-25/f4977dfb7c83397233803a73cae17ecd.jpg?v=636688095792900000\" width=\"25\" height=\"25\" alt=\"f4977dfb7c83397233803a73cae17ecd\" id=\"\" />",
                    "thumbUrl": "https://casaegaragem.vteximg.com.br/arquivos/ids/155453-25-25/f4977dfb7c83397233803a73cae17ecd.jpg?v=636688095792900000",
                    "name": "bomba periférica bp500 intech machine",
                    "href": "https://casaegaragem.vtexcommercestable.com.br/bomba-periferica-bp500-intech-machine/p",
                    "criteria": null
                }
            ]
        }
    }

    

    renderResultList(items){

    }

    getSearch(query){
        const baseUrl = 'https://casaegaragem.vtexcommercestable.com.br/';
        axios.get(`${baseUrl}/buscaautocomplete/?productNameContains=${query}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }


}

window.searchForm = new SearchForm();