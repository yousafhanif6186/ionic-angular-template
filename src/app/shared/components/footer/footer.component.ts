import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date = new Date();

  navLinks = [
    { title: 'Link One', link: '#' },
    { title: 'Link Two', link: '#' },
    { title: 'Link Three', link: '#' },
    { title: 'Link Four', link: '#' },
    { title: 'Link Five', link: '#' },
  ];

  policyLinks = [
    { title: 'Privacy Policy', link: '#' },
    { title: 'Terms of Service', link: '#' },
    { title: 'Cookies Settings', link: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
