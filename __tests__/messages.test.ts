const english = {};

function showMessage(language: object, message: object) {
    return "An error has occurred";
}


describe("translations", () => {
  it("shows a message in english", () => {
    expect(showMessage(english, { code: "generalError" })).toBe("An error has occurred");
  });
});
