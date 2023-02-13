const { faker } = require('@faker-js/faker');

function register(_requestParams, ctx, _ee, next) {
  const id = faker.datatype.number();
  ctx.vars['email'] = faker.internet.email().split('@').join(`${id}@`);
  ctx.vars['password'] = faker.internet.password(10);

  return next();
}

function generateArticle(_requestParams, ctx, _ee, next) {
  const id = faker.datatype.hexadecimal({ length: 100 });
  ctx.vars['title'] = faker.lorem.word() + id;
  ctx.vars['content'] = faker.lorem.sentence(1) + id;

  return next();
}

module.exports = {
  register,
  generateArticle,
};
