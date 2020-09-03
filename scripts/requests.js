'use strict';

const getWord = (count) => {
    console.log('api word count', count);
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Error fetching data');
        }
      }).then(data => data.puzzle);
}

