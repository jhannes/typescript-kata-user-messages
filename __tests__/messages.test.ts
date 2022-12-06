const norwegian = {};

function showMessage(language: object, message: object) {
  return "En feil har inntruffet";
}

describe("translated messages", () => {
  it("shows message in Norwegian", () => {
    expect(showMessage(norwegian, {code: "generalError"})).
      toBe("En feil har inntruffet");
  });
});
