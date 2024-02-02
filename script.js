let warmhugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmhugs);
console.log(warmhugs.toUpperCase());

console.log(warmhugs.replace("like", "love"));
console.log(warmhugs);

let beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled.slice(18));

let dotDotDot = "..."
let skullBones = "I don't have a skull...or bones."
skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);

let randomNumber = Math.random() * 3;
randomNumber = Math.floor(randomNumber) + 1
console.log(randomNumber);