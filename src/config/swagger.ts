import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / Typescript',
            version: '1.0.0',
            description: 'API docs for products'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .swagger-ui .topbar a {
        flex:0;
        }
        .topbar-wrapper .link {
            content: url('https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar{
        background-color: black}
    `,
    customSiteTitle: 'Documentation REST API Express / Typescript'
}

export default swaggerSpec;
export {
    swaggerUiOptions
}