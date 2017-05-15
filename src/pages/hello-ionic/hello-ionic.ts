import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { ItemDetailsPage } from '../item-details/item-details';
var newlist = [
  "abfahren",
  "abfliegen",
  "abgeben",
  "abholen ",
  "achtgeben",
  "ändern (sich)",
  "anfangen",
  "ankommen",
  "anmachen",
  "anmelden (sich)",
  "anrufen",
  "antworten",
  "anziehen (sich)",
  "arbeiten",
  "ärgern (sich)",
  "aufhören",
  "aufmachen",
  "aufpassen",
  "aufräumen",
  "aufschreiben",
  "aufstehen",
  "ausfüllen",
  "ausgeben",
  "auspacken",
  "aussehen",
  "aussteigen",
  "ausziehen sich",
  "ausziehen ",
  "baden",
  "bedeuten",
  "beeilen (sich)",
  "beginnen",
  "behalten",
  "bekommen",
  "benutzen",
  "beschweren (sich)",
  "besichtigen",
  "bestehen",
  "bestellen",
  "besuchen",
  "bezahlen",
  "bitten",
  "bleiben",
  "bloggen",
  "bluten",
  "brauchen",
  "bremsen",
  "bringen",
  "buchen",
  "buchstabieren",
  "danken",
  "dauern",
  "denken",
  "diskutieren",
  "drucken",
  "dürfen*",
  "duschen (sich)",
  "einkaufen",
  "einladen",
  "einsteigen",
  "einziehen",
  "enden",
  "entschuldigen",
  "erinnern (sich)",
  "erklären",
  "erlauben",
  "erreichen",
  "erzählen",
  "essen",
  "fahren",
  "fallen",
  "fehlen",
  "feiern",
  "fernsehen",
  "finden",
  "fliegen",
  "fragen",
  "freuen (sich)",
  "frühstücken",
  "fühlen (sich)",
  "geben",
  "gefallen",
  "gehen",
  "gehören",
  "gewinnen",
  "glauben",
  "grillen",
  "haben*",
  "halten (sich)",
  "hängen",
  "hängen",
  "heiraten",
  "heißen",
  "helfen",
  "holen",
  "hören",
  "interessieren (sich)",
  "kaufen",
  "kennen",
  "kennenlernen",
  "klopfen",
  "kochen",
  "kommen",
  "können*",
  "korrigieren",
  "kosten",
  "kümmern (sich)",
  "lachen",
  "lassen",
  "laufen",
  "leben",
  "legen",
  "leihen",
  "lernen",
  "lesen",
  "liefern",
  "liegen",
  "lösen",
  "lügen",
  "machen",
  "meinen",
  "merken (sich)",
  "mieten",
  "mitbringen",
  "mitkommen",
  "mitmachen",
  "mitnehmen",
  "möchten*",
  "mögen*",
  "müssen*",
  "nehmen",
  "öffnen",
  "parken ",
  "passen",
  "probieren ",
  "putzen",
  "rauchen",
  "regnen",
  "reisen",
  "renovieren",
  "reparieren",
  "reservieren",
  "riechen",
  "sagen",
  "sammeln",
  "scheinen",
  "schenken",
  "schicken",
  "schlafen",
  "schließen",
  "schmecken",
  "schneiden (sich)",
  "schneien",
  "schreiben",
  "schwimmen",
  "sehen",
  "sein*",
  "singen",
  "sitzen",
  "sollen*",
  "spazieren gehen",
  "speichern",
  "spielen",
  "sprechen",
  "spülen",
  "stattfinden",
  "stecken",
  "stehen",
  "stehen bleiben",
  "stellen",
  "sterben",
  "stimmen",
  "stören",
  "streiten (sich)",
  "studieren",
  "suchen",
  "tanken",
  "tanzen",
  "tauschen",
  "teilnehmen",
  "telefonieren",
  "tragen",
  "treffen (sich)",
  "trinken",
  "tun",
  "übernachten",
  "übersetzen",
  "überweisen",
  "umsteigen",
  "umziehen",
  "umziehen (sich)",
  "unterhalten (sich)",
  "unternehmen",
  "unterschreiben",
  "untersuchen",
  "verdienen",
  "vereinbaren",
  "vergessen",
  "vergleichen",
  "verkaufen",
  "verlieren",
  "verpassen",
  "verschieben",
  "versprechen (sich)",
  "verstehen (sich)",
  "versuchen",
  "vorstellen",
  "wählen",
  "wandern",
  "warten",
  "waschen (sich)",
  "wechseln ",
  "wecken",
  "werden",
  "wiederholen",
  "wissen",
  "wohnen",
  "wollen*",
  "wünschen (sich)",
  "zahlen",
  "zeigen",
  "zuhören",
  "zumachen",
  "zurechtkommen"

];
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlitePorter: SQLitePorter) {
    //this.initializeItems();

    this.items = [];
    for(let i=0; i< newlist.length; i++){
      this.items.push({
        title : newlist[i],
      });
    }
  }

  initializeItems() {


  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
    this.items = [];
    for(let i=0; i< newlist.length; i++){
      this.items.push({
        title : newlist[i],
      });
    }
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemSelected(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  //End  bracket
}
