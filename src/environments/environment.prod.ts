export const environment = {
    production: true,
    app_name: 'Mooncascade Event',
    languages: {
        available: [
            {
                locale: 'en',
                name: 'English',
                icon: '/assets/icons/png/gb.png',
                is_default: true
            },
            {
                locale: 'et',
                name: 'Estonian',
                icon: '/assets/icons/png/ee.png',
                is_default: false
            }
        ]
    },
    firebase: {
        apiKey: 'AIzaSyCbWPdhXVTKG_ChU-gl1-yzg5SJQf1eR3k',
        authDomain: 'alt-project-eacc3.firebaseapp.com',
        databaseURL: 'https://alt-project-eacc3.firebaseio.com/',
        storageBucket: 'gs://alt-project-eacc3.appspot.com',
        messagingSenderId: '964218083224'
    }
};
