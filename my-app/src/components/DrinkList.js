function Drink({ name }) {
    let plant, amount, age;

    if (name === 'tea') {
        ({ plant, amount, age } = { plant: 'tea', amount: '15–70 mg/cup', age: '4,000+ years' });
    } else if (name === 'coffee') {
        ({ plant, amount, age } = { plant: 'bean', amount: '80–185 mg/cup', age: '1,000+ years' });
    }
 
    return (
        <section>
        <h1>{name}</h1>
            <dl>
                <dt>Part of plant:</dt>
                    <dd>{plant}</dd>
                <dt>Caffeine content:</dt>
                    <dd>{amount}</dd>
                <dt>Age:</dt>
                    <dd>{age}</dd>
            </dl>
        </section>
    );
}




  
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  