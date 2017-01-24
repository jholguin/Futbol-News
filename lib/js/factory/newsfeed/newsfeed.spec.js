describe('NewsFeed Service', function() {
	var Articles;

  var articleFeed = [
    {
      author: "Football Italia Staff",
      title: "Deulofeu: ‘Milan the best Italian club’",
      description: "Gerard Deulofeu calls Milan “the biggest team in Italy” and hopes to play against Juventus on Wednesday.",
      url: "http://www.football-italia.net/node/97322",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Deulofeu-1701-training-milan.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "‘No offer for Defrel’",
      description: "Sassuolo CEO Giovanni Carnevali insists Roma haven’t bid for Gregoire Defrel, and warns “we want to keep our players”.",
      url: "http://www.football-italia.net/node/97324",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Defrel-Mauricio490epa_0.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Niang rejects Genoa?",
      description: "Reports suggest Milan want to send M’Baye Niang to Genoa for Lucas Ocampos, but the Frenchman isn’t keen.",
      url: "http://www.football-italia.net/node/97323",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Niang-woo490epa_4.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Squinzi: ‘Sassuolo want to keep Defrel’",
      description: "Sassuolo President Giorgio Squinzi confirms they hope to keep Gregoire Defrel “for the entire season”.",
      url: "http://www.football-italia.net/97321/squinzi-%E2%80%98sassuolo-want-keep-defrel%E2%80%99",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/squinzi490epa_10.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Ballardini back at Palermo?",
      description: "Davide Ballardini could be set for another return to Palermo, if they sack Eugenio Corini.",
      url: "http://www.football-italia.net/97320/ballardini-back-palermo",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/ballardini-shades490epa_7.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Ranieri: ‘Roma for the Scudetto!’",
      description: "Claudio Ranieri confirms he’s backing Roma for the Scudetto, but “I hope everyone can reach the level of Juventus”.",
      url: "http://www.football-italia.net/97319/ranieri-%E2%80%98roma-scudetto%E2%80%99",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Ranieri-PL490epa_1.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "P. Berlusconi: ‘Milan calm for closing’",
      description: "Paolo Berlusconi assures there is “absolute calm” for the sale of Milan to Chinese group Sino-Europe Sports.",
      url: "http://www.football-italia.net/97318/p-berlusconi-%E2%80%98milan-calm-closing%E2%80%99",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Milan-CurvaSud490epa_21.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Sassuolo: ‘Defrel is staying’",
      description: "Despite reports that Gregoire Defrel is close to Roma, Sassuolo’s CEO insists “nothing has changed”.",
      url: "http://www.football-italia.net/97317/sassuolo-%E2%80%98defrel-staying%E2%80%99",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Defrel-Perin-epa_1.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Ranocchia brings Rodriguez to Inter?",
      description: "Inter are aiming to include Andrea Ranocchia in any deal for Wolfsburg’s Ricardo Rodriguez, according to reports.",
      url: "http://www.football-italia.net/97316/ranocchia-brings-rodriguez-inter",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Ranocchia-phone490epa_5.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    },
    {
      author: "Football Italia Staff",
      title: "Fiorentina name squad for Napoli",
      description: "Paulo Sousa has named his Fiorentina squad to face Napoli in the Coppa Italia, with Gonzalo Rodriguez out injured.",
      url: "http://www.football-italia.net/97315/fiorentina-name-squad-napoli",
      urlToImage: "http://www.football-italia.net/sites/default/files/imagecache/main_photo/[type]/[nid]/Sousa-apology490epa_1.jpg",
      publishedAt: "2017-01-23T01:00:00Z"
    }
  ];

	beforeEach(angular.mock.module('futbol'));

  	
	beforeEach(inject(function(_Articles_) {
  	Articles = _Articles_;
	}));

	it('should exist', function() {
  	expect(Articles).toBeDefined();
	});

  it('should return a list of feed articles', function(){
    Articles.then(function(data){
        expect(data.data.articles).toEqual(articleFeed);
    })
    
  });
});