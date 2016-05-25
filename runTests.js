var config = {
    packages: {
        //but it works with /v0
        '': {
            defaultExtension: 'js',
            meta: {
                'vendor/util1.global.js': { format: 'global' }
            }
        }
    },
    baseURL: '/v0/',
    map: {
        text: 'assets/text'
    },
};

window.require = System.amdRequire;
window.define = System.amdDefine;


System.config(config);

//to reproduce this error, change `'/v0/'` to just `'/'`
//System.import('vendor/util1.global.js').then(() => console.log('loaded directly'));
//ALSO FAILS - tasks loads vendor/util1.global
System.import('tasks/tasks').then(() => console.log('TASKS LOADED'));

//------------------------------------------------------

//Problems with getting the text loader

//This fails - it does not map text.js correctly
Promise.all([
    System.import('contacts/contacts'),
    System.import('contacts/contacts.htm!text')
]).then(([obj]) => checkit(() => obj.name == 'contacts', 'contacts loaded'));

//This works - contactsWithHtml correctly pulls down text.js from it's specified location
//System.import('contacts/contactsWithHtml').then(obj => checkit(() => obj.name == 'contacts', 'contacts loaded'));


function checkit(expr, message){
    try {
        let result = expr();
        console.log(result ? 'PASS' : 'FAIL', message);
    } catch (err){
        console.log('FAIL', err, message);
    }

}