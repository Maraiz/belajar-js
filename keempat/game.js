class Character {
    constructor(name, healt, position) {
        this.name = name;
        this.healt = healt;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} move to ${this.position}`);        
    }
}

function canAttack(character) {
    return {
      attack: () => {
        console.log(`${character.name} attacks with a weapon!`);
      }
    };
  }
   
  function canDefend(character) {
    return {
      defend: () => {
        console.log(`${character.name} defends with a shield!`);
      }
    };
  }
   
  function canCastSpell(character) {
    return {
      castSpell: () => {
        console.log(`${character.name} casts a spell!`);
      }
    };
  }
   
  function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
  }
   
  function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
  }
   
  function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
  }
   
  function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
  }
   
  const monster = createMonster('Monster');
  monster.canMove();
  monster.attack();
   
  const guardian = createGuardian('Guardian');
  guardian.canMove();
  guardian.defend();
   
  const wizard = createWizard('Wizard');
  wizard.canMove();
  wizard.castSpell();
   
  const warrior = createWarrior('Warrior');
  warrior.canMove();
  warrior.attack();
  warrior.defend();

// class Monster extends karakter {
//     canAttack() {
//         console.log(`${this.name} attack a weapon!`);       
//     }
// }    

// class Tank extends karakter {
//     canDefend() {
//         console.log(`${this.name} defend with a shield`);        
//     }
// }

// class Wizard extends karakter {
//     canSpell() {
//         console.log(`${this.name} cast a magic spell`);
        
//     }
// }

// class Warrior extends karakter {
//     canAttack() {
//         console.log(`${this.name} attack with weapon`);        
//     }
//     canDefend() {
//         console.log(`${this.name} defend with shield`);
        
//     }
// }