import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QRCodeService {
  private apiUrl = 'https://api.qrserver.com/v1/create-qr-code/';

  constructor(private http: HttpClient) {}

  generateQRCode(data: string, size: number = 150) {
    const url = `${this.apiUrl}?data=${encodeURIComponent(data)}&size=${size}x${size}`;
    return url;
  }
}
