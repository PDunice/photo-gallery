import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-level-bubble',
  templateUrl: './level-bubble.component.html',
  styleUrls: ['./level-bubble.component.scss']
})
export class LevelBubbleComponent implements OnInit, OnDestroy {
  // @Input() level: number = 0; // Nível da bolha
  normalizedX: number = 0; // Normalização do eixo X
  normalizedY: number = 0; // Normalização do eixo Y
  normalizedZ: number = 0; // Normalização do eixo Z
  private subscription!: Subscription;

  constructor(private deviceMotion: DeviceMotion) { }

  ngOnInit() {
    this.startMonitoring();
  }

  ngOnDestroy() {
    this.stopMonitoring();
  }

  startMonitoring() {
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((data: DeviceMotionAccelerationData) => {
      // Usar a aceleração em Y para determinar o nível
      this.normalizedX = this.normalizeValue(data.x);
      this.normalizedY = this.normalizeValue(data.y);
      this.normalizedZ = this.normalizeValue(data.z);
    });
  }

  stopMonitoring() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  normalizeValue(value: number): number {
    const maxValue = 9.81; // Aceleração máxima em m/s²
    const minValue = -9.81; // Aceleração mínima em m/s²

    // Normalizando o valor entre 0 e 100%
    const normalized = ((value - minValue) / (maxValue - minValue)) * 100;

    // Garantir que o valor esteja entre 0 e 100
    return Math.max(0, Math.min(100, normalized));
  }

}
