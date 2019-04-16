describe('/objects', () => {
  describe('GET /create-person?name={name}&age={age}', () => {
    it('returns a person object with a name and age', (done) => {
      chai.request(server)
        .get('/objects/create-person')
        .query({ name: 'Elena', age: 27 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: { name: 'Elena', age: 27 } });
          done();
        });
    });
  });
});


// describe('GET /remainder?a={number}&b={number}', () => {
//     it('gives the remainder of dividing 18 by 5', (done) => {
//       chai.request(server)
//         .post('/numbers/remainder')
//         .query({ a: 18, b: 5 })
//         .end((err, res) => {
//           expect(err).to.equal(null);
//           expect(res.status).to.equal(200);
//           expect(res.body).to.eql({ result: 3 });
//           done();
//         });
//     });


// describe('/arrays', () => {
//   describe('POST /element-at-index/{index}', () => {
//     xit('returns the element at the given index', (done) => {
//       chai.request(server)
//         .post('/arrays/element-at-index/2')
//         .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
//         .end((err, res) => {
//           expect(err).to.equal(null);
//           expect(res.status).to.equal(200);
//           expect(res.body).to.eql({ result: 'elephant' });
//           done();
//         });
//     });
//   });

// describe('GET /is-odd/{number}', () => {
//     it('returns true when passed an odd number', (done) => {
//       chai.request(server)
//         .get('/booleans/is-odd/7')
//         .end((err, res) => {
//           expect(err).to.equal(null);
//           expect(res.status).to.equal(200);
//           expect(res.body).to.eql({ result: true });
//           done();
//         }
