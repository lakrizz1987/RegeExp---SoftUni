function solve(input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:.\d+)?)!(?<qty>\d+)/
    let totalSum = 0;

    console.log("Bought furniture:");

    let line = input.shift();
    while (line != 'Purchase') {
        let pattern = regex.exec(line);
        if (pattern != null) {
            console.log(pattern.groups.name);
            totalSum += Number(pattern.groups.qty) * Number(pattern.groups.price);
        }


        line = input.shift();
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)