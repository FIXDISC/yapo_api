var expect    = require("chai").expect
var app = require('../app')
var request = require('supertest')
var request = request("http://localhost:8000")

describe("PI Random decimales", function() {
        it('NO SE PERMITEN CARACTERES', function(done){
            request.get('/pi/?random_limit=aa//aaaa')
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.text).to.equal('Debe ingresar un numero', done)
                done()
              })   
        });

        it('SOLO NUMEROS ENTEROS', function(done){
            request.get('/pi/?random_limit=0.25')
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.text).to.equal('Solo se permiten enteros', done)
                done()
              })   
        });
        
        it('JS MAXIMO 15 CHARS', function(done){
            request.get('/pi/?random_limit=65989898')
            .end(function(err, res) {
                if (err) return done(err)
                expect(res.text).to.equal('El maximo de decimales en JS es 15', done)
                done()
              })   
        });

  });