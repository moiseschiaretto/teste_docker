const assert = require('assert');
const { userID } = require('./config'); 
const { config } = require('process');
const tempoDeRespostaMax = 2000;
const statusCodeGET = 200;
const statusCodePOST = 201;
const statusCodeDEL = 200;

// Função para verificar o status code da resposta = 200
const verifyStatusCodeGet = (status) => {
  assert.equal(status, statusCodeGET);
};

// Função para verificar o status code da resposta = 201
const verifyStatusCodePost = (status) => {
  assert.equal(status, statusCodePOST);
};

// Função para verificar o status code da resposta = 204
const verifyStatusCodeDEL = (status) => {
  assert.equal(status, statusCodeDEL);
};

// Função para verificar o tempo de resposta da requisição
const verifyResponseTime = (startTime, endTime) => {
  const responseTime = endTime - startTime;
  assert.ok(responseTime <= tempoDeRespostaMax, 'Tempo de resposta maior que ' + tempoDeRespostaMax + ' ms');
};

// Função para verificar detalhes do usuário na resposta JSON - GET ID
const verifyUserDetails = (res) => {
  const user = res.body.data;
  assert.strictEqual(user.id, userID, "ID do usuário não corresponde ao esperado");
  assert.strictEqual(user.email, "george.bluth@reqres.in", "Email do usuário não corresponde ao esperado");
  assert.strictEqual(user.first_name, "George", "Primeiro nome do usuário não corresponde ao esperado");
  assert.strictEqual(user.last_name, "Bluth", "Último nome do usuário não corresponde ao esperado");
  assert.strictEqual(user.avatar, "https://reqres.in/img/faces/1-image.jpg", "URL do avatar do usuário não corresponde ao esperado");
};

// Função para verificar detalhes do update do usuário na resposta JSON - PUT
const verifyUserDetailsUpdate = (res) => {
  try {
    // Verifica se a estrutura da resposta é diretamente em res.body
    const user = res.body;
    assert.strictEqual(user.name, 'Novo Usuário2', 'Name should match');
    assert.strictEqual(user.email, 'novo2@usuario.com', 'Email should match');
  } catch (error) {
    console.error('Erro na verificação dos detalhes de atualização do usuário:', error);
    throw error;
  }
};

module.exports = {
  statusCodeGET,
  statusCodePOST,
  statusCodeDEL,
  verifyStatusCodeGet,
  verifyStatusCodePost,
  verifyResponseTime,
  verifyUserDetails,
  verifyUserDetailsUpdate,
  verifyStatusCodeDEL,
};
