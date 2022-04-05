function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!';
  } else if (value > 400 && value <= 2000) {
    return 'That will be twenty bucks.';
  } else if (value > 2000 && value <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (value > 2500) {
    return 'No can do.';
  }
}

console.log(scuberGreetingForFeet(199));


function ternaryCheckCity(city) {
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

console.log(ternaryCheckCity('NYC'));


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}

console.log('generous');