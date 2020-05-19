class Instructor {
constructor({ name, role = 'assistant' }){
    this.name = name; 
    this.role = role;
    }

    renderDetails() {
        console.log(`${this.name}:${this.role}`)
    }

    static helloWorld() {
        console.log('Hi There');
    }
}

const jon = new Instructor({ name: 'Jon Snow'});
const brayden = new Instructor({ name: 'Brayden', role: 'Teaher'});

brayden.renderDetails(); 
jon.renderDetails(); 