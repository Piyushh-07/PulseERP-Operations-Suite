import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BadgeComponent, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';

@Component({
  standalone: true,
  selector: 'app-page-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  imports: [CommonModule, RouterLink, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective, BadgeComponent]
})
export class PagePlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  readonly title = this.route.snapshot.data['title'] ?? 'Module';
  readonly subtitle = this.route.snapshot.data['subtitle'] ?? 'This module is under development for PulseERP workflows.';
}
