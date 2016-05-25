var config = {
    packages: {
        //but it works with /v0
        '/': {
            defaultExtension: 'js',
            map: { },
            meta: {
                'vendor/util1.global.js': { format: 'global' }
            }
        }
    },
    baseURL: '/v0'
};

window.require = System.amdRequire;
window.define = System.amdDefine;


System.config(config);

System.import('vendor/util1.global.js').then(() => console.log('loaded directly'));
//ALSO FAILS - tasks loads vendor/util1.global
//System.import('tasks/tasks').then(() => console.log('TASKS LOADED'));

//System.import('contacts/contacts').then(obj => checkit(() => obj.name == 'contacts', 'contacts loaded'));

function checkit(expr, message){
    try {
        let result = expr();
        console.log(result ? 'PASS' : 'FAIL', message);
    } catch (err){
        console.log('FAIL', err, message);
    }

}