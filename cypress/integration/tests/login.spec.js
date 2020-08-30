import { SignupPage } from "../../page-objects";
import { randomUser1, randomUser2 } from "../../data";

const signupPage = new SignupPage();

describe("Signup Test Suite", () => {
  beforeEach(() => {
    cy.visit(signupPage.url).should;
  });

  it("Signup with valid document should be successful", () => {
    cy.title()
      .should("eq", signupPage.title)
      .get(signupPage.firstNameField)
      .type(randomUser1.firstName)
      .get(signupPage.lastNameField)
      .type(randomUser1.lastName)
      .get(signupPage.companyNameField)
      .type(randomUser1.companyName)
      .get(signupPage.phoneField)
      .type(randomUser1.mobilephone)
      .get(signupPage.documentField)
      .type(randomUser1.cpf)
      .get(signupPage.birthdateField)
      .type(randomUser1.birthdate)
      .get(signupPage.where_do_you_sell)
      .type(randomUser1.where_do_you_sell)
      .get(signupPage.currentDropdown)
      .click()
      .get(signupPage.sell_numbers)
      .type(randomUser1.sell_numbers)
      .get(signupPage.currentDropdown)
      .click()
      .get(signupPage.emailField)
      .type(randomUser1.email)
      .get(signupPage.emailConfirmField)
      .type(randomUser1.email)
      .get(signupPage.passwordField)
      .type(randomUser1.password)
      .get(signupPage.passwordConfirmField)
      .type(randomUser1.password)
      .get(signupPage.termsChkbox)
      .click()
      .get(signupPage.nextButton)
      .click()

      .get(signupPage.cepField)
      .type(randomUser1.CEP)
      .get(signupPage.addressField)
      .click()
      .get(signupPage.addressField)
      .should("have.value", randomUser1.address)
      .get(signupPage.numberField)
      .type(randomUser1.number)
      .get(signupPage.districtField)
      .should("have.value", randomUser1.district)
      .get(signupPage.cityField)
      .should("have.value", randomUser1.city)
      .get(signupPage.nextButton)
      .click()
      .get(signupPage.signupSuccessSpan)
      .should("have.text", "cadastro realizado com sucesso!");
  });

  it("Signup with invalid document should not be successful", () => {
    cy.title()
      .should("eq", signupPage.title)
      .get(signupPage.firstNameField)
      .type(randomUser2.firstName)
      .get(signupPage.lastNameField)
      .type(randomUser2.lastName)
      .get(signupPage.companyNameField)
      .type(randomUser2.companyName)
      .get(signupPage.phoneField)
      .type(randomUser2.mobilephone)
      .get(signupPage.documentField)
      .type("1234567899090")
      .get(signupPage.birthdateField)
      .type(randomUser1.birthdate)
      .get(signupPage.errorText)
      .should("be.visible")
      .get(signupPage.errorText)
      .should("have.text", "CPF inválido! Verifique se o mesmo está correto.");
  });
});
