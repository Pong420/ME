const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '../projects');

let count = 0;

const projects = fs
  .readdirSync(root)
  .reduce((result, dir) => {
    const path_ = path.join(root, dir);

    if (fs.lstatSync(path_).isDirectory()) {
      const data = JSON.parse(fs.readFileSync(`${path_}/data.json`) || '{}');
      const description = fs.readFileSync(`${path_}/desc.html`);

      result.push({
        ...data,
        description: description.toString()
      });
    }

    return result;
  }, [])
  .sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })
  .map(obj => {
    if (obj.type === 'Self Project') {
      obj.num = count;
      obj.isProject = true;

      count++;
    }

    return obj;
  });

fs.writeFileSync('./src/projects.json', JSON.stringify(projects));
