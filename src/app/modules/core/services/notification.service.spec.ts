import {TestBed, inject} from '@angular/core/testing';
import {AppActions} from '../../../app.actions';
import {NotificationService} from './notification.service';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {Notification} from '../../../models/notification';

describe('NotificationService', () => {

    let service: NotificationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgReduxTestingModule],
            providers: [NotificationService, AppActions]
        });

        MockNgRedux.reset();
    });

    beforeEach(inject([NotificationService], s => {
        service = s;
    }));

    it('should dispatch NOTIFICATION_ADD when add is called', () => {

        const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');

        const type = 'Test';
        const title = 'Test title';
        const message = 'Test message';

        const notification: Notification = service.add(type, title, message);
        expect(spy).toHaveBeenCalledWith({type: AppActions.NOTIFICATION_ADD, payload: notification});
    });

    it('should dispatch NOTIFICATION_DELETE_ALL when deleteAll is called', () => {

        const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');

        service.deleteAll();
        expect(spy).toHaveBeenCalledWith({type: AppActions.NOTIFICATION_DELETE_ALL});
    });
});
