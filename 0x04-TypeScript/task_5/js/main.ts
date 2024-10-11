// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Example usage
const math: MajorCredits = { credits: 3, brand: 'Major' };
const physics: MajorCredits = { credits: 4, brand: 'Major' };
const history: MinorCredits = { credits: 2, brand: 'Minor' };
const art: MinorCredits = { credits: 3, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(math, physics);
const totalMinorCredits = sumMinorCredits(history, art);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Outputs: Total Major Credits: 7
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Outputs: Total Minor Credits: 5
