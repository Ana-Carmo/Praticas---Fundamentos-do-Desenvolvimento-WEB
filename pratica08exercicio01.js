function validarFormulario () {

var login = meuFormulario.login.value;
var email = meuFormulario.email.value;
var dataNascimento = meuFormulario.dataNascimento.value;
var senha = meuFormulario.senha.value;
var confirmarSenha = meuFormulario.confirmarSenha.value;
var sexo = meuFormulario.sexo.value;
var cidade = meuFormulario.cidade.value;
var homePage = meuFormulario.homePage.value;
var interesses1 = meuFormulario.interesses1.checked;
var interesses2 = meuFormulario.interesses2.checked;
var interesses3 = meuFormulario.interesses3.checked;


if (login == ""){
	alert('Preencha o campo login.');
	meuFormulario.login.focus();
	return false;
}

if (email == "" || email.indexOf("@") == -1){
	alert('Preencha o campo e-mail.');
	meuFormulario.email.focus();
	return false;
}

if (dataNascimento == ""){
	alert('Preencha o campo data de nascimento.');
	meuFormulario.dataNascimento.focus();
	return false;
}

if (senha == "" || senha <= 8){
	alert('Informe a senha com no mínimo 08 caracteres.');
	meuFormulario.senha.focus();
	return false;
}

if (confirmarSenha == "" || confirmarSenha != senha){
	alert('Digite a senha novamente.');
	meuFormulario.senha.focus();
	return false;
}

if (sexo == ""){
	alert('Informe o sexo.');
	meuFormulario.sexo.focus();
	return false;
}

if (cidade == ""){
	alert('Informe a cidade.');
	meuFormulario.cidade.focus();
	return false;
}

if (homePage == ""){
	alert('Informe a Home-Page.');
	meuFormulario.homePage.focus();
	return false;
}

if (interesses1 == false && interesses2 == false && interesses3 == false){
	alert('Informe os interesses.');
	meuFormulario.interesses.focus();
	return false;
}

else {
	alert('Formulário preenchido com sucesso');
	return true;
}
}