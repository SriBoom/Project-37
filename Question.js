class Questions {
    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput('Type in the answer');
      this.question = createElement('h2');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3')
    }
  
    hide(){
      this.question.hide();
      this.input2.hide();
      this.input1.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Quiz Game");
      title.position(350, 0);
     
      this.question.html("Question:- What starts and ends with the letter E, but has only one letter?");
      this.question.position(100, 80);
      this.option1.html("1: Everyone");
      this.option1.position(150, 100)
      this.option2.html("2: Envelope");
      this.option2.position(150, 120);

      this.input1.position(150, 230);
      this.input2.position(100, 230);
  
    }
  }
  