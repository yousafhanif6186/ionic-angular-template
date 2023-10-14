import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-secondary',
  templateUrl: './footer-secondary.component.html',
  styleUrls: ['./footer-secondary.component.scss'],
})
export class FooterSecondaryComponent implements OnInit {
  date = new Date();

  navLinks = [
    { title: 'Overview', link: '#' },
    { title: 'Help', link: '#' },
    { title: 'Privacy', link: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
