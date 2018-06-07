/**
 * Author: Phillip Freitas
 * Description: Make test for jokenpo
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

const chai = require('chai');
const { assert, expect } = chai;
const { jokenpo } = require('../controller');

describe('Jokenpo game tests', () => {
  it('Must return "player one win!" (pedra > tesoura)', () => {
    jokenpo.getResult({ playerOne: 'pedra', playerTwo: 'tesoura' }, function (err, data) { 
      expect(data).to.equal('Player One Win!');
    });
  });

  it('Must return "player two win!" (pedra < papel)', () => {
    jokenpo.getResult({ playerOne: 'pedra', playerTwo: 'papel' }, function (err, data) {
      expect(data).to.equal('Player two Win!');
    });
  });

  it('Must return "Game tied! Play again!" (pedra == pedra)', () => {
    jokenpo.getResult({ playerOne: 'pedra', playerTwo: 'pedra' }, function (err, data) {
      assert.equal(data, 'Game tied! Play again!');
    });
  });
});

describe('Jokenpo game tests', () => {
  it('Must return "player one win!" (tesoura > papel)', () => {
    jokenpo.getResult({ playerOne: 'tesoura', playerTwo: 'papel' }, function (err, data) {
      expect(data).to.equal('Player One Win!');
    });
  });

  it('Must return "player two win!" (tesoura < pedra)', () => {
    jokenpo.getResult({ playerOne: 'tesoura', playerTwo: 'pedra' }, function (err, data) {
      expect(data).to.equal('Player two Win!');
    });
  });

  it('Must return "player two win!" (tesoura == tesoura)', () => {
    jokenpo.getResult({ playerOne: 'tesoura', playerTwo: 'tesoura' }, function (err, data) {
      assert.equal(data, 'Game tied! Play again!');
    });
  });
});

describe('Jokenpo game tests', () => {
  it('Must return "player one win!" (papel > pedra)', () => {
    jokenpo.getResult({ playerOne: 'papel', playerTwo: 'pedra' }, function (err, data) {
      expect(data).to.equal('Player One Win!');
    });
  });

  it('Must return "player two win!" (papel < tesoura)', () => {
    jokenpo.getResult({ playerOne: 'papel', playerTwo: 'tesoura' }, function (err, data) {
      expect(data).to.equal('Player two Win!');
    });
  });

  it('Must return "Game tied! Play again!" (papel == papel)', () => {
    jokenpo.getResult({ playerOne: 'papel', playerTwo: 'papel' }, function (err, data) {
      assert.equal(data, 'Game tied! Play again!');
    });
  });
});