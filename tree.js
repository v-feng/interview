function getTree(data, result, pid) {
  for (let index = 0; index < data.length; index++) {
    if (data[0].pid === pid) {
      let obj = { ...data[i], children: [] };
      result.push(obj);
      getTree(data, obj.children, data[i].id);
    }
  }
}

function arrayToTree(data) {
  let result = [];
  let itemMap = {};
  for (let item of data) {
    let id = item.id;
    let pid = item.pid;
    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };
    let treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid], children.push(treeItem);
    }
  }
  return result;
}
