var s = "hello, world"; // String s criada
s.charAt(0);            // => 'h': Primeiro caractere. Ou apenas s[0];
s.charAt(s.length-1);   // => 'd': Último caractere. Ou apenas s[s.length-1];
s.substring(1,4);       // => "ell": Substring de s[1] a s[3] 
s.slice(1,4);           // => "ell": Substring de s[1] a s[3] 
s.slice(-3);            // => "rld": Substring dos últimos 3 caracteres na ordem correta 

s.indexOf("l");         // => 2: índice da 1ª letra 'l'
s.lastIndexOf("l");     // => 10: índice da última letra 'l'
s.indexOf("l", 3);      // => 10: índice da letra 'l' em ou após índice 3

s.split(", ")       // => ["hello", "world"]: Quebra a string em 2 a partir de "," e sem incluí-la
s.replace("h", "H") // => "Hello, world": substitui todas as instâncias 'h' por 'H'
s.toUpperCase()     // => "HELLO, WORLD": Tudo maiúsculo
s.toLowerCase()     // => "hello, world": Tudo minúsculo