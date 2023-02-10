const path = require('path');

// Basename - Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname - Diretório atual
console.log(path.dirname(__filename));

// Extname - Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Path.join - Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));
