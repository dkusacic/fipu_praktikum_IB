const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
chai.use(require('sinon-chai'));

const priceListFormat = require('../priceListFormat.js');

describe('#priceListFormat()', function () {
  it('should be a function', function () {
    expect(priceListFormat).to.be.a('function');
  });

  context('wrong input', function () {
    it('should throw error if no argument', function () {
      expect(() => dayOfYear(1)).to.throw();
      expect(() => dayOfYear({})).to.throw();
    });
    it('should throw error if argument is not an array', function () {
      expect(() => dayOfYear(1)).to.throw();
      expect(() => dayOfYear({})).to.throw();
    });
    it('should throw error if argument is an empty array', function () {
      expect(() => dayOfYear([])).to.throw();
    });
  });

  context('with correctly formatted data as input', function () {
    beforeEach(() => {
      sinon.restore();
    });

    const data = [
      {
        from: '2020-01-01',
        to: '2020-02-01',
        price: 34.5,
      },
      {
        from: '2020-02-02',
        to: '2020-03-01',
        price: 37.0,
      },
      {
        from: '2020-03-02',
        to: '2020-05-15',
        price: 39.0,
      },
    ];

    it('should return undefined', function () {
      expect(priceListFormat(data)).to.be.an('undefined');
    });

    it('should log once', function () {
      const log = sinon.spy(console, 'log');
      priceListFormat(data);
      expect(log).to.be.calledOnce;
    });

    it('should log string', function () {
      const log = sinon.spy(console, 'log');
      priceListFormat(data);
      expect(log.args[0][0]).to.be.a('string');
    });

    it('should log data with correct format', function () {
      const log = sinon.spy(console, 'log');
      priceListFormat(data);
      const expectedOutput = `34.5 : 2020-01-01 do 2020-02-01\n37.0 : 2020-02-02 do 2020-03-01\n39.0 : 2020-03-02 do 2020-05-15`;
      expect(log).to.have.been.calledWithExactly(expectedOutput);
    });

    it('should log data ordered by price', function () {
      const log = sinon.spy(console, 'log');
      data.push({
        from: '2020-02-15',
        to: '2020-03-04',
        price: 38.0,
      });
      priceListFormat(data);
      const expectedOutput = `34.5 : 2020-01-01 do 2020-02-01\n37.0 : 2020-02-02 do 2020-03-01\n38.0 : 2020-02-15 do 2020-03-04\n39.0 : 2020-03-02 do 2020-05-15`;
      expect(log).to.have.been.calledWithExactly(expectedOutput);
    });

    it('should log data stacking date logs with same price', function () {
      const log = sinon.spy(console, 'log');
      data.push({
        from: '2020-05-16',
        to: '2020-06-15',
        price: 37.0,
      });
      priceListFormat(data);
      const expectedOutput = `34.5 : 2020-01-01 do 2020-02-01\n37.0 : 2020-02-02 do 2020-03-01 , 2020-05-16 do 2020-06-15\n38.0 : 2020-02-15 do 2020-03-04\n39.0 : 2020-03-02 do 2020-05-15`;
      expect(log).to.have.been.calledWithExactly(expectedOutput);
    });
  });
});
