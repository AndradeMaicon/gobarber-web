import React, { useCallback, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {
  Container,
  Header,
  HeaderContainer,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointement,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContainer>
      </Header>

      <Content>
        <Schedule>
          <h1>Horario agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 08</span>
            <span>Terca-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
                alt="Maicon"
              />
              <strong>Maicon Andrade</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manha</strong>

            <Appointement>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
                  alt="Maicon"
                />
                <strong>Maicon Andrade</strong>
              </div>
            </Appointement>

            <Appointement>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
                  alt="Maicon"
                />
                <strong>Maicon Andrade</strong>
              </div>
            </Appointement>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointement>
              <span>
                <FiClock />
                8:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
                  alt="Maicon"
                />
                <strong>Maicon Andrade</strong>
              </div>
            </Appointement>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Marco',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
