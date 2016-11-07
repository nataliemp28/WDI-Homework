process.env.NODE_ENV = 'test';

const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Project = require('../models/project');

describe("GET /projects", () => {

  before(done => {

    Project.collection.drop();
    Project.create({
      title: "test",
      github: "natalie@gmail.com",
      url: "nataliemp28",
      users: ['5820b7687be92a1aa4241b47']
    }, done);
  });

  it("should return a 200 response", (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .expect(200, done);
  });

  it("should return an array", (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.body).to.be.an('array');
      done();
    });
  });
});

describe('GET /projects/:id', () => {

  let projectId = null;

  before(done => {
    Project.collection.drop();
    Project.create({
      title: "hello",
      github: "nataliesgithub",
      url: "www.natalie.com",
      users: ["5820b7687be92a1aa4241b48"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    api.get(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .expect(200, done);
  });

  it('should return an object', (done) => {
    api.get(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .send({
      title: "hello",
      github: "nataliesgithub",
      url: "www.natalie.com",
      users: ["5820b7687be92a1aa4241b48"]
    })
    .end((err, res) => {
      expect(res.body).to.be.an('object');
      done();
    });
  });
});

describe('POST /projects', () => {
    beforeEach(done => {
      Project.collection.drop();
      done();
    });

    it('should return a 201 response', (done) => {
      api.post('/projects')
      .set('Accept', 'application/json')
      .send({
        title: "hello",
        github: "nataliesgithub",
        url: "www.natalie.com",
        users: ["5820b7687be92a1aa4241b49"]
      })
      .expect(201, done);
    });

    it('should return an object', (done) => {
      api.post('/projects')
      .set('Accept', 'application/json')
      .send({
        title: "hello",
        github: "nataliesgithub",
        url: "www.natalie.com",
        users: ["5820b7687be92a1aa4241b49"]
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });

  describe('PUT /project/:id', () => {
  let projectId = null;

  beforeEach(done => {
    Project.collection.drop();
    Project.create({
      title: "hello",
      github: "nataliesgithub",
      url: "www.natalie.com",
      users: ["5820b7687be92a1aa4241b49"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    api.put(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .send({
      title: "Natalie's cool project",
      github: "natalieatgit",
      url: "www.nataliesgithub.com",
      users: ["5820b7687be92a1aa4241b4a"]
    })
    .expect(200, done);
  });

  it('should return an object', (done) => {
    api.put(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .send({
      title: "Natalie's cool project",
      github: "natalieatgit",
      url: "www.nataliesgithub.com",
      users: ["5820b7687be92a1aa4241b4a"]
    })
    .end((err, res) => {
      expect(res.body).to.be.an('object');
      done();
    });
  });
});

describe('DELETE /projects/:id', () => {
  let projectId = null;

  beforeEach(done => {
    Project.collection.drop();
    Project.create({
      title: "Natalie's cool project",
      github: "natalieatgit",
      url: "www.nataliesgithub.com",
      users: ["5820b7687be92a1aa4241b4a"]
    }, (err, project) => {
      projectId = project._id;
      done();

    });
  });

  it('should return a 204 response', done => {
    api.delete(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .expect(204, done);
  });

  it('should have ACTUALLY deleted the project!', (done) => {
    api.delete(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      Project.find((err, projects) => {
        expect(projects.length).to.equal(0);
        done();
      });
    });
  });
});
