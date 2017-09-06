// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    app_name: 'Mooncascade Event',
    languages: {
        available: [
            {
                code: 'en',
                name: 'English',
                icon: '/assets/icons/png/gb.png',
                is_default: true
            },
            {
                code: 'et',
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
    },
    api_base_url: 'http://jlamb.mooncascade.com/api'
};
