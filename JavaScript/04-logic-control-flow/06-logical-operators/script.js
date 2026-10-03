// && - will return first falsy value or last value

let a;
a = 10 && 20; //true
a = 10 && 0; //false;
console.log(a);

const posts = [];
posts.length > 0 && console.log(posts[0]);

// || - will return first truthy value or the last value

let b;
b = 10 || 20;
b = 0 || null || " " || undefined;
console.log(b);

//?? - Return the right side operand when the left is null or undefined

let c;
c = 10 ?? 20; // 10
c = null ?? 20; //20
c = undefined ?? 30; //30
console.log(c);
