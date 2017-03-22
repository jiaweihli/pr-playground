function hello() {
  return "h" + "e" + "l" + "l" + "o";
}

function hello_world() {
    var hello_world_string = hello() + "wor" + 'ld'

    window.console.log(hello_world_string);
}

export default hello_world;
