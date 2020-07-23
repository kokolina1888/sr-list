export const checkFormElementValidity = (value, rule) => {

  let validationResult = {
    valid: true,
    message: "",
  };
  let validationArr = rule.split(":");
 
  switch (validationArr[0]) {
    case "email":
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!pattern.test(value)) {
        return (validationResult = {
          valid: false,
          message: "Enter valid email!",
        });
      }
    
    case "minLength":
      if (value.trim().length < validationArr[1]) {
        return (validationResult = {
          valid: false,
          message: "Enter at least " + validationArr[1] + " long!",
        });
      }
    
    default:
      return validationResult;
  }
};
