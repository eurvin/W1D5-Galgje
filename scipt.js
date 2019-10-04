//array maken met woorden
//function die een woord kiest
//een let maken die het gekozen woord is(?)

const words= ['programmeren', 'javascript', 'slack', 'tutorials', 'github', 'samenwerken',
'studeren', 'browser', 'terminal'];

const word= words[Math.random() * words.length | 0];

console.log(word);