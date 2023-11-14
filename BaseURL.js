
export const baseURL = () => {

    let url = '';

    switch(process.env.NODE_ENV) {
        
        case 'development':
            url = 'http://localhost:8000';
            break;

        case 'production':
            url = 'https://river-city-chronicles.000webhostapp.com';
            break;

        default:
            url = 'https://river-city-chronicles.000webhostapp.com';
    }

    return url;
}