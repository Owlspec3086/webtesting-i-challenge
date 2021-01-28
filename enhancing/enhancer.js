module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  } else {
    err;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement > 16) {
    item.enhancement -= 1;
  } else if (item.enhancement < 15 && item.durability > 0) {
    item.durability -= 5;
  } else if (item.enhancement < 17 && item.durability > 0) {
    item.durability -= 10;
  }
  return { ...item };
}

function repair(item) {
  if (item.durability < 100) {
    item.durability = 100;
  } else {
    err;
  }
  return { ...item };
}

function get(item) {
  let enhancedWeapon = {
    name: '',
    enhancement: 0,
    durability: 0,
  };

  if (item.enhancement > 0) {
    return (enhancedWeapon = {
      name: `[+${item.enhancement}] ${item.name}`,
      enhancement: item.enhancement,
      durability: item.durability,
    });
  } 
  else {
    err;
  }
  return { ...item };
}
