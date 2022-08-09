let num = 10;

// 判断是否为成年人
let fun1 = (age) => {
  // 如果小于18为未成年， 大于等于18为成年人
  if (age < 18) {
    return "未成年";
  } else {
    return "成年人";
  }
};

// 两个条件的情况， else可以省略， 以下为简写
let fun2 = (age) => {
  // 如果小于18为未成年， 大于等于18为成年人
  if (age < 18) {
    return "未成年";
  }

  return "成年人";
};

//判断是幼儿，青年， 壮年， 老年
let fun3 = (age) => {
  if (age < 7) {
    return "幼儿";
  }

  if (age >= 7 && age < 20) {
    return "青年";
  }

  if (age >= 20 && age < 60) {
    return "壮年";
  }
  if (age >= 60) {
    return "老年";
  }
};

//判断是幼儿，青年， 壮年， 老年
let fun4 = (age) => {
  if (age <= 0) {
    return "参数不合法";
  }

  if (age < 7) {
    return "幼儿";
  } else if (age < 20) {
    return "青年";
  } else if (age < 60) {
    return "壮年";
  } else {
    return "老年";
  }
};
