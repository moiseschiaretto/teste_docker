const request = require('supertest');
const { baseUrl, endPoint, contentType, accept, userID, authToken } = require('./config'); 
const { verifyStatusCodeGet, verifyStatusCodePost, verifyStatusCodeDEL, verifyResponseTime, verifyUserDetails, verifyUserDetailsUpdate, statusCodeGET, statusCodePOST, statusCodeDEL } = require('./assertions');
let userIdNew;

// Collection
describe('Request User - Method: ', () => {
  // it.only || test.only
  // it.skip || test.skip
  // it.each || test.each
  
  // Request GET ALL
  it.skip('GET ALL - deve retornar o erro do processo assíncrono não finalizado antes de imprimir o response.', (done) => {
        request(baseUrl)
            .get(endPoint)
            .set('Accept', contentType)
            .expect('Content-Type', accept)
            .expect(statusCodeGET)
            // Imprime o JSON no console
            console.log('JSON:');
            console.log(res.body);
            console.log(res.Status);
        try{
            done();
        } catch (error) {
            // Reportar o erro
            console.error('Erro na execução do teste:', error);
            throw error;
        }
    });

  // Request GET ALL
  it.skip('GET ALL - deve retornar o erro de tempo de resposta >= 2000 ms, Supertest não retorna responseTime diretamente', async () => {
    try{
        const res = await request(baseUrl)
            .get(endPoint)
            .set('Accept', contentType)
            .expect('Content-Type', accept)
            .expect(statusCodeGET)
            // Imprime o JSON no console
            console.log('JSON:');
            console.log(res.body);
            // Utiliza as funções de assert separadas
            verifyStatusCode(res.status);
            verifyResponseTime(res.ResponseTime);           
    } catch (error) {
        // Reportar o erro
        console.error('Erro na execução do teste:', error);
        throw error;
    }
});


  // Request GET ALL
  it('GET ALL - deve listar todos os usuários e o Status Code = ' + statusCodeGET, async () => {
    try{
        // Captura o tempo inicial
        const start = Date.now();
        const res = await request(baseUrl)
            .get(endPoint)
            .set('Accept', contentType)
            .expect('Content-Type', accept)
            .expect(statusCodeGET)
            // Imprime o JSON no console
            console.log('JSON:');
            console.log(res.body);
            // Captura o tempo final após a resposta ser recebida
            const end = Date.now();
            // Supertest não retorna responseTime diretamente, é necessário calcular responseTime manualmente
            verifyResponseTime(start, end); 
            // Utiliza as funções de assert separadas
            verifyStatusCodeGet(res.status);          
    } catch (error) {
        // Reportar o erro
        console.error('Erro na execução do teste:', error);
        throw error;
    }
});

// Request GET ID
it('GET ID - deve listar somente um usuário e o Status Code = ' + statusCodeGET, async () => {
    try{
        // Captura o tempo inicial
        const start = Date.now();
        const res = await request(baseUrl)
            .get(endPoint + userID)
            .set('Accept', contentType)
            .expect('Content-Type', accept)
            .expect(statusCodeGET)
            // Verifica se a resposta da API contém corpo JSON válido
            if (!res.body) {
                throw new Error('Resposta da API não contém corpo JSON');
            }
            // Imprime o JSON no console
            console.log('JSON:');
            console.log(res.body);
             // Captura o tempo final após a resposta ser recebida
             const end = Date.now();
            // Supertest não retorna responseTime diretamente, é necessário calcular responseTime manualmente
            verifyResponseTime(start, end);
            // Utiliza as funções de assert separadas
            verifyStatusCodeGet(res.status);
            // Verifica os detalhes do usuário na resposta - GET ID
            verifyUserDetails(res);
    } catch (error) {
        // Reportar o erro
        console.error('Erro na execução do teste:', error);
        throw error;
    }
});

// Request POST
it('POST - deve criar um novo usuário e o Status Code = ' + statusCodePOST, async () => {
    try {
        const requestBody = {
            name: "Novo Usuário",
            email: "novo@usuario.com",
            age: 31
        };
        // Captura o tempo inicial
        const start = Date.now();
        // Realiza o POST usando Supertest
        const res = await request(baseUrl)
            .post(endPoint)
            .set('Authorization', authToken)
            .set('Accept', authToken)
            .set('Content-Type', accept)
            .send(requestBody);
        // Log do corpo da resposta
        console.log('Resposta JSON:');
        console.log(res.body);
        // Captura o tempo final após a resposta ser recebida
        const end = Date.now();
        // Supertest não retorna responseTime diretamente, é necessário calcular responseTime manualmente
        verifyResponseTime(start, end);
        // Utiliza as funções de assert separadas
        verifyStatusCodePost(res.status);
        // Extrai o ID do usuário do corpo da resposta
        userIdNew = res.body.id;
        console.log('ID do usuário criado: ' + userIdNew);
    } catch (error) {
        // Reporta o erro, se houver
        console.error('Erro na execução do teste:', error);
        throw error;
    }
});

// Request PUT
it('PUT - deve atualizar os dados do novo usuário e o Status Code = ' + statusCodeGET, async () => {
    if (!userIdNew) {
        throw new Error('ID do usuário não está definido');
    };
    const requestBody = {
      name: 'Novo Usuário2',
      email: 'novo2@usuario.com'
    };
    try {
      // Captura o tempo inicial
      const start = Date.now();
      const res = await request(baseUrl)
        .put(endPoint + userIdNew)
        .set('Authorization', authToken)
        .set('Accept', authToken)
        .set('Content-Type', accept)
        .send(requestBody);
        // Log do corpo da resposta
        console.log('Resposta JSON:');
        console.log(res.body);
        // Captura o tempo final após a resposta ser recebida
        const end = Date.now();
        // Supertest não retorna responseTime diretamente, é necessário calcular responseTime manualmente
        verifyResponseTime(start, end);
        // Utiliza as funções de assert separadas
        verifyStatusCodeGet(res.status);
        // Verifica se a resposta da API contém corpo JSON válido
        if (!res.body) {
            throw new Error('Resposta da API não contém corpo JSON');
        }
        // Verifica os novos dados inseridos
        verifyUserDetailsUpdate(res);
    } catch (error) {
        // Reporta o erro, se houver
        console.error('Erro na execução do teste:', error);
        throw error;
    }
  });

  // Request DELETE
  it('DELETE - deve excluir o novo usuário e o Status Code = ' + statusCodeDEL, async () => {
    if (!userIdNew) {
        throw new Error('ID do usuário não está definido');
    };  
    try {
      // Captura o tempo inicial
      const start = Date.now();
      const res = await request(baseUrl)
        .put(endPoint + userIdNew)
        .set('Authorization', authToken)
        .set('Accept', authToken)
        .set('Content-Type', accept)
        // Log do corpo da resposta
        console.log('Resposta JSON:');
        console.log(res.body);
        // Captura o tempo final após a resposta ser recebida
        const end = Date.now();
        // Supertest não retorna responseTime diretamente, é necessário calcular responseTime manualmente
        verifyResponseTime(start, end);
        // Utiliza as funções de assert separadas
        verifyStatusCodeDEL(res.status);
    } catch (error) {
        // Reporta o erro, se houver
        console.error('Erro na execução do teste:', error);
        throw error;
    }
  });

});
