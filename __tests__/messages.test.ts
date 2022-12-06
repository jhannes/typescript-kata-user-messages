type MessageTexts = {
  generalError: string;
};

const norwegian: MessageTexts = {
  generalError: "En feil har inntruffet",
};
const english: MessageTexts = {
  generalError: "An error has occurred",
};

type Message = { code: "generalError" };

function showMessage(language: MessageTexts, message: Message) {
  return language[message.code];
}

describe("translated messages", () => {
  it("shows message in Norwegian", () => {
    expect(showMessage(norwegian, { code: "generalError" })).toBe(
      "En feil har inntruffet"
    );
  });

  it("shows message in english", () => {
    expect(showMessage(english, { code: "generalError" })).toBe(
      "An error has occurred"
    );
  });
});
