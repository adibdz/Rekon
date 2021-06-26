var invalidDomains = ['@gmail.','@yahoo.','@hotmail.','@live.','@aol.','@outlook.'];

MktoForms2.whenReady(function (form){
  form.onValidate(function(){
    var email = form.vals().Email;
    if(email){
      if((form.getId() == 1371 || window.location.pathname.substring(0,8) == '/events/') && !isEmailGood(email)) {
        form.submitable(false);
        var emailElem = form.getFormElem().find('input[name="Email"]');
        form.showErrorMessage("Please use a business email", emailElem);
      } else {
        form.submitable(true);
      }
    }
  });
});

function isEmailGood(email) {
  for(var i=0; i < invalidDomains.length; i++) {
    var domain = invalidDomains[i];
    if (email.indexOf(domain) != -1) {
      return false;
    }
  }
  return true;
}
