import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-first-footer',
  templateUrl: './first-footer.component.html',
  styleUrls: ['./first-footer.component.scss']
})
export class FirstFooterComponent implements OnInit {

  faGoogle=faGoogle;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faGithub=faGithub;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
