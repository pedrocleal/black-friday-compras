export function errorHandler(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Esse e-mail já está em uso!';
    case 'WEAK_PASSWORD : Password should be at least 6 characters': 
      return 'A senha precisa ter no mínimo 6 caracteres.'
    default:
      break;
  }
}