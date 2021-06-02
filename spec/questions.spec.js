describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('Wiam');
        // on donne le reésultat attendu
        expect(result).toEqual(4);
    });

    it('Remplacer le premier e d\'une chaine par un espace', function () {
        var resultSpace = spaceString('je suis Wiam Malek');
        expect(resultSpace).toMatch('j  suis Wiam Malek')

    });

      it('Concatener deux chaines de caractères', function () {
          var result = concatenate('Salut', 'Wiam');
          expect(result).toEqual('Salut Wiam');
      });
    //
      it('Afficher le cinquième caractère d\'une chaine', function () {
          let character = fifthCharacter('je suis sur la quatriémme exo') ;
          expect(character).toBe('u');
      });
    //
    it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function () {
        var stringCharacter = displayNinthCharacter('je suis sur la cinquieme exo');
        expect(stringCharacter).toBe('je suis s')
    });
    //
    it('Mettre en majuscule la chaine', function () {
        var stringUpperCase = capitalize('Le sixieme exo');
        expect(stringUpperCase).toBe('LE SIXIEME EXO');
    });
    //
    it('Mettre en minuscule la chaine', function () {
      var stringLowerCase = lowerCaseString('Le septième exercice');
      expect(stringLowerCase).toBe('le septième exercice');
    });

    it('Supprimer les espaces avant et après la chaine', function () {
       var removeWhiteSpace = whiteSpace(' le dixiéme exo ');
       expect(removeWhiteSpace).toEqual('le dixiéme exo') 
    });

    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
        var enterParameter = functionParameter('parameter');
        // expect(enterParameter).toEqual(true)
        expect(enterParameter).toBeTrue();
    });
    it('Afficher l\'extension du fichier', function () {
        var displayFileExtention = fileExtention ('index.js');
        expect(displayFileExtention).toEqual('js')
    });

    it('Compter le nombre d\'espace dans la chaine', function () {
        var compterNombreEspace = compterEspace('le avant dernier exercice')
        expect(compterNombreEspace).toEqual(3);
    });
    it('Inverser une chaine de caractères', function () {
         var stringReverse = reverseString('wiam')
         expect(stringReverse).toEqual('maiw')
    });
})

